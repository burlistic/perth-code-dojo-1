describe("Binary search", function() {

	beforeEach(function() {
		binarySearch = new BinarySearch();
	});

	it("should return the correct search index", function() {
		var index = binarySearch.chop(3, [1,3,4]);
		expect(index).toEqual(1);
	});

	it("should return the correct search index", function() {
		var index = binarySearch.chop(1, [1,3,4]);
		expect(index).toEqual(0);
	});

	

	it("should return the correct search index", function() {
		var index = binarySearch.chop(4, [1,2,3,4,5,6]);
		expect(index).toEqual(3);
	});

    it("should return the correct search index", function() {
	 	var index = binarySearch.chop(4, [1,2,3]);
	 	expect(index).toEqual(-1);
	 });

    it("should return the correct search index", function() {
	 	var index = binarySearch.chop(4, []);
	 	expect(index).toEqual(-1);
	 });

    it("should return the correct search index", function() {
		var index = binarySearch.chop(4, [1,4,5,6]);
		expect(index).toEqual(1);
	});


	it("should return the correct search index", function() {
		var index = binarySearch.chopRecursive(3, [1,3,4]);
		expect(index).toEqual(1);
	});

	it("should return the correct search index", function() {
		var index = binarySearch.chopRecursive(1, [1,3,4]);
		expect(index).toEqual(0);
	});

	it("should return the correct search index", function() {
		var index = binarySearch.chopRecursive(4, [1,2,3,4,5,6]);
		expect(index).toEqual(3);
	});

  //   it("should return the correct search index", function() {
	 // 	var index = binarySearch.chopRecursive(4, [1,2,3]);
	 // 	expect(index).toEqual(-1);
	 // });




});