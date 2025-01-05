const BoyerMooreRepository = require("../repositories/bm.repository");

class BoyerMooreService {
    static async addParttern({
        text,
        pattern
    }) {
        const addPattern = await BoyerMooreRepository.addPartternMatching(text, pattern)
        if(!addPattern) {
            throw new Error("Failed add parttern!")
        }
        return {
            result: addPattern
        }
    }
    static async search({ text, pattern }) {
        let result = false;
        
        // let maxCharacters = 256;
        let j;

        let shift = 0;

        const m = pattern.length;
        const n = text.length;
        
        const borderPosition = [m + 1];
        const toStoreShift = [m + 1];
        
        for (let i = 0; i < m + 1; i++)
        {
            toStoreShift[i] = 0;
        }
        
        BoyerMooreRepository.suffixCase(toStoreShift, borderPosition, pattern, m);
        BoyerMooreRepository.prefixCase(toStoreShift, borderPosition, pattern, m);
        
        while (shift <= n - m)
        {
            j = m - 1;
            while (j >= 0 && pattern[j] == text[shift + j]) { j--; }
            if (j < 0)
            {
                console.log("Pattern occurs at position {0}\n", shift);
                result = true;
                //move pattern to the right by the maximum shift.
                shift += toStoreShift[0];
                
            }
            else { shift += toStoreShift[j + 1]; }
        }
        return {
            result: result
        }
    }
}

module.exports = BoyerMooreService