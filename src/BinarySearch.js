function BinarySearch() {
};


BinarySearch.prototype.chop = function(value, array) {

    lo = 0;
    hi = array.length - 1;

    while (lo <= hi) {

        var mid = Math.floor((lo+hi)/2);

        if (array[mid] > value)
        {
            hi = mid - 1;
        }
        else if (array[mid] < value)
        {
            lo = mid + 1;
        }
        else
        {
            return mid;
        }
    }

    return -1;
};

BinarySearch.prototype.chopRecursive = function(value, array) {

	return this.search(value, array, 0, array.length);
};	


BinarySearch.prototype.search = function(value, a, lo, hi) {

	    if (hi < lo)
	        return null;
	    var mid = Math.floor((lo+hi)/2);
	    if (a[mid] > value)
	        return this.search(a, value, lo, mid-1);
	    else if (a[mid] < value)
	        return this.search(a, value, mid+1, hi);
	    else {
	        return mid;
	    }
};