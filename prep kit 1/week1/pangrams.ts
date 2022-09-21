function pangrams(s: string): string {

    const letters = s.replaceAll(/\s/g, '').toLowerCase().match(/[a-z]/g);

    const uniqLetter = new Set(letters);
    if (uniqLetter.size < 26)
        return "not pangram"


    return "pangram"
}