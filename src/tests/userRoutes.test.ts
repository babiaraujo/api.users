import request from 'supertest';
import app from '../app';

describe('User Routes', () => {
  it('GET /api/users should return a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('POST /api/users should create a new user', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' };
    const response = await request(app).post('/api/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newUser);

    const getUsersResponse = await request(app).get('/api/users');
    expect(getUsersResponse.body.length).toBe(1);
    expect(getUsersResponse.body[0]).toMatchObject(newUser);
  });

  it('POST /api/users should return 400 if name or email is missing', async () => {
    const response = await request(app).post('/api/users').send({});
    expect(response.status).toBe(400);
    expect(response.text).toBe('Name and email are required');
  });
});
