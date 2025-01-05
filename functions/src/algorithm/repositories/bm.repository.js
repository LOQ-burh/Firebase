class BoyerMooreRepository {
    static async suffixCase(
        shift,
        borderPosition,
        pattern,
        m
    ) {
        let i = m, j = m + 1;
        borderPosition[i] = j;
        while (i > 0)
        {
            while (j <= m && pattern[i - 1] != pattern[j - 1])
            {
                if (shift[j] == 0) { shift[j] = j - i; }
                j = borderPosition[j];
            }
            i--;
            j--;
            borderPosition[i] = j;
        }
    }
    static async prefixCase(
        shift,
        borderPosition,
        pattern,
        m
    ) {
        let i, j = borderPosition[0];
        for (i = 0; i <= m; i++)
        {
            if (shift[i] == 0) { shift[i] = j; }
            if (i == j) { j = borderPosition[j]; }
        }
    }
}

module.exports = BoyerMooreRepository