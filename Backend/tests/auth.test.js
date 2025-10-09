const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');

jest.mock('jsonwebtoken');

describe('Middleware Auth (simple)', () => {
  let req, res, next;

  beforeEach(() => {
    req = { headers: { authorization: 'Bearer faketoken' } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  it('doit ajouter req.auth si token valide', () => {
    jwt.verify.mockReturnValue({ userId: 'user123' });

    authMiddleware(req, res, next);

    expect(req.auth).toEqual({ userId: 'user123' });
    expect(next).toHaveBeenCalled();
  });

  it('doit retourner 401 si aucun token fourni', () => {
    req.headers = {}; // pas d’en-tête
    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'No token provided' });
  });

  it('doit retourner 401 si token invalide', () => {
    jwt.verify.mockImplementation(() => { throw new Error('Invalid token'); });

    authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid token' });
  });
});