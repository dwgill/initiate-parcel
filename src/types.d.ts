declare module 'droll' {
    interface DrollFormula {
        /** The number of dice to roll. */
        numDice: number;
        /** The number of sides on each die. */
        numSides: number;
        /** The optional modifier. The default is 0. */
        modifier: number;
        /** The minimum result that can be returned by this formula. */
        minResult: number;
        /** The maximum result that can be returned by this formula. */
        maxResult: number;
        /** The average result returned by this formula. ((max + min) / 2) */
        avgResult: number;
    }

    interface DrollResult {
        /** The result of each die roll. */
        rolls: number[];
        /** The optional modifier. The default is 0. */
        modifier: number;
        /** The sum of the rolls plus the modifier. */
        total: number;

        /**
         * The DrollResult object also has a custom toString() method for
         * pretty printing the result.
         * It returns strings that look like `6 + 5 + 5 + 1 = 17`
         * or `4 + 2 - 1 = 5` or even just `7`.
         */
        toString(): string;
    }

    /**
     * @param formula The dice formula in standard dice notation.
     * @returns true if formula is valid dice notation or false otherwise.
     */
    function validate(formula: string): boolean;

    /**
     * Rolls the dice defined by formula and returns a DrollResult object on
     * success or false otherwise.
     * @param formula The dice formula in standard dice notation, no whitespace.
     */
    function roll(formula: string): DrollResult | false;

    /**
     * Parses formula into its component pieces and returns a DrollFormula
     * object on success or false otherwise.
     * @param formula The dice formula in standard dice notation, no whitespace.
     */
    function parse(formula: string): DrollFormula | false;
}
