describe('yearsAgo Test' , function(){
    it('should return "48" when called with 1976' , function(){
        assert.equal((new Date().getFullYear() - 1976), 48) 
    });

    it('should return "24" when called with 2000' , function(){
        assert.equal((new Date().getFullYear() - 2000), 24);
    });

    it('should return "20" when called with 2004' , function(){
        assert.equal((new Date().getFullYear() - 2004), 20);
    });
});