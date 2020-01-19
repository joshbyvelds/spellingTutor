class Game {
    constructor(){
        // TODO: Set Game Variables..
        // TODO: Get list of words from Wikipedia..
        // TODO: Setup web speech API..
        // TODO: Load practice words from previous sessions..
        // TODO: First Speak word..
    }

    /**
     * @remarks
     * Get a bunch of words from a random Wikipedia article and return them in a array
     *
     * @return {Array<string>} - the list of words for this playthough
     */
    private getWordList(){

    }

    /**
     * @remarks
     * Send a post call to the database and return the list of words that the player has failed at spelling in the last ten playthoughs
     *
     * @return {Array<string>} - the list of words that the player has failed on spelling in the last ten playthroughs
     */
    private getPracticeWords()
    {

    }
}

// Load the class when all files have finished loading..
(function(){
    window.onload = function(){
        const game = new Game();
    }
}());