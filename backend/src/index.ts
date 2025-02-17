import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from './schema';
import resolvers from './resolvers';
import dotenv from 'dotenv';
import { createLogger, format, transports } from 'winston';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

const prisma = new PrismaClient();
const app = express();

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

async function startApolloServer() {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }: { req: express.Request }) => ({ prisma, req }),
      formatError: (error) => {
        logger.error(error);
        return error;
      },
    });

    await server.start();

    server.applyMiddleware({ app: app as any });

    const PORT = process.env.PORT || 4000;
    const httpServer = app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      logger.info('SIGTERM signal received: closing HTTP server');
      httpServer.close(() => {
        logger.info('HTTP server closed');
      });
      prisma.$disconnect();
    });

  } catch (error) {
    logger.error('Error starting server:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

// Error handling for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', error);
  process.exit(1);
});

startApolloServer();
