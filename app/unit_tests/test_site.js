describe('Test site.js', function() {


  //
  // Example: A test case of getRandomIntInclusive
  //
  describe('getRandomIntInclusive Coverage Test', function() {

    it('value within 1 to 3', function() {
      var value = getRandomIntInclusive(1, 3);
      expect( value>=1 && value <= 3 ).toEqual(true);
    });

  });

  describe('getURLParameter testing',function(){
    var name = getURLParameter('google');

  });

  describe('initalizeFirebase testing',function(){
    initalizeFirebase();
  });


   describe('retrieveOnceFirebase testing',function(){
  	 retrieveOnceFirebase();
   });

});
