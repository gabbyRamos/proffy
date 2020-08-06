import express from 'express';
import db from './database/connetion';

const routes = express.Router();

routes.post('/users', async (request, response) =>{
  const {
    name,
    avatar,
    whatsapp,
    bio,
    // subject,
    // cost,
    // schedule,
  } = request.body;

  await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  });
  
  return response.send();
});

export default routes;