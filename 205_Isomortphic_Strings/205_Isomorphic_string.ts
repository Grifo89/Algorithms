let isIsomorphic: (str1: string, str2: string) => boolean

isIsomorphic = (s, t) => {

    if (s.length != t.length) {
        return false;
    }
    const mapS = new Map<string, number>();
    const mapT = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        if(mapS.get(s[i]) != mapT.get(t[i])) {
            return false;
        }
        mapS.set(s[i], i);
        mapT.set(t[i], i);
    }

    return true;
}

// An othe approach

function isIsomorphic2(s: string, t: string): boolean {
    if (s.length != t.length) {
        return false;
    }
    for (let i = 1; i < s.length; i++) {
        // verify that the first occurrence of the current character occures at the same position in both. 
        if (t.indexOf(t[i]) !== s.indexOf(s[i])) {
            return false
        }
    }
    return true;
}