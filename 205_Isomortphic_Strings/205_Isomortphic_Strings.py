class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        mapping_s_t = {}
        mapping_t_s = {} 

        if(len(s) != len(t)): 
            return False

        for c1, c2 in zip(s, t):
            mapping_s_t[c1] = c2
            mapping_t_s[c2] = c1

        if(list(mapping_s_t.keys()) == list(mapping_t_s.values())): 
            return True
        else:
            return False