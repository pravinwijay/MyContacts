// Importations
const Contact = require('../models/Contact');
const contactController = require('../controllers/contact');

// Mock du modèle Mongoose Contact (empêche toute requête réelle)
jest.mock('../models/Contact');

describe('Contact Controller (simple)', () => {
  let req, res;

  beforeEach(() => {
    req = {
      auth: { userId: 'user123' },
      params: { id: 'contact123' },
      body: { firstName: 'John', lastName: 'Doe', phone: '0606060606' }
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.clearAllMocks();
  });

  // --- GET ---
  it('getAllContacts : doit retourner un tableau de contacts', async () => {
    const mockContacts = [{ firstName: 'John' }];
    Contact.find.mockResolvedValue(mockContacts);

    await contactController.getAllContacts(req, res);

    expect(Contact.find).toHaveBeenCalledWith({ user: 'user123' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockContacts);
  });

  // --- POST ---
  it('createContact : doit créer un contact', async () => {
    // On simule ce que fait "new Contact(...)" : créer un objet avec "save()"
    const mockSave = jest.fn().mockResolvedValue(true);
    Contact.mockImplementation(function (data) {
      return { ...data, save: mockSave };
    });

    await contactController.createContact(req, res);

    expect(mockSave).toHaveBeenCalled(); // Vérifie que save() a bien été appelé
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        firstName: 'John',
        user: 'user123'
      })
    );
  });

  // --- DELETE ---
  it('deleteContact : doit retourner 404 si aucun contact trouvé', async () => {
    Contact.findOneAndDelete.mockResolvedValue(null);

    await contactController.deleteContact(req, res);

    expect(Contact.findOneAndDelete).toHaveBeenCalledWith({
      _id: 'contact123',
      user: 'user123'
    });
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Contact non trouvé' });
  });
});