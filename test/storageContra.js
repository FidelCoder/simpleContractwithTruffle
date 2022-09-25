const storageContra = artifacts.require('contracts/storageContra.sol');

contract('storageContra', () => {
    it('Should update data', async () => {
        const storage = await storageContra.new();
        await storage.updateData(10);
        const data = await storage.readData();
        assert(data.toString() === '10');
    });    
});