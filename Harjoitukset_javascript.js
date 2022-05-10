
	/**
	 * Write your method here that returns the provided input list reversed.
	 * 
	 * @param input list
	 * @return provided list reversed
	 */
     function doReverseList(listOrig) {
		// TODO: Write code!
        let reverseList = []
        for (let i = listOrig.length-1; i>=0; i--)
            reverseList.push(listOrig[i])
		return reverseList
	}

    const listOrig = ["a", "b", "c", "d", "e", "f", "g"]
    let result = doReverseList(listOrig)
    console.log(result)


    /*
	@Test
	public void testFibonacciSequence() {
		int sequenceLength = 8;
		int[] expectedResult = { 1, 1, 2, 3, 5, 8, 13, 21 };
		int[] result = doFibonacciSequence(sequenceLength);
		Assert.assertArrayEquals(expectedResult, result);
	}
*/
	/**
	 * Write your method here that returns the fibonacci sequence up to the provided
	 * sequence length.
	 * 
	 * @param sequenceLength the amount of fibonacci sequence items to calculate
	 * @return int array containing the calculated fibonacci sequence
	 */
     function doFibonacciSequence(sequenceLength) {
		// TODO: Write code!
        //We assume sequenceLength >= 2
        let fibSeq = [1, 1]
        for (let i = 2; i < sequenceLength; i++)
            fibSeq.push(fibSeq[i-2] + fibSeq[i-1])
		return fibSeq
	}

    let resultFib = doFibonacciSequence(8)
    console.log(resultFib)
 
