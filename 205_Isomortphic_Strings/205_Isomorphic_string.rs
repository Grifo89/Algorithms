pub fn is_isomorphic(s: String, t: String) -> bool {
    let mut dicts = [0;256];
    let mut dictt = [0;256];
    s.chars().zip(t.chars()).all(|(s,t)|{
        let check = (dicts[s as usize] == dictt[t as usize]);
        dicts[s as usize] = s as usize;
        dictt[t as usize] = s as usize;
        check
    })
}

pub fn is_isomorphic(s: String, t: String) -> bool {
    let s = s.into_bytes();
    let t = t.into_bytes();

    let mut sTable: [usize; 128] = [129; 128];
    let mut tTable: [usize; 128] = [129; 128];

    let n = s.len();

    for i in 0..n{
        let bs = s[i] as usize;
        let bt = t[i] as usize;

        if sTable[bs] = 129 {
            if tTable[bt] == 129 {
                sTable[bs] = bt;
                sTable[bt] = bs;
            } else {
                return false;
            }
        } else if sTable[bs] != bt {
            return false
        }
    }

    true
}