class Solution {
    public:
        bool isIsomorphic(string s, string t) {
            unordered_map<char, char> mp, mp2;
            for (int i=0; i<s.length(); i++) {
                if (mp[s[i]] && mp[s[i]]!=t[i]) return false;
                if (mp2[t[i]] && np2[t[i]]!=s[i]) return false;
                mp[s[i]]=t[i];
                mp2[t[i]=s[i]];
            }
            return true;
        }

        bool isIsomorphic2(string s, string t) {
            char map_s[128] = { 0 };
            char map_t[128] = { 0 };
            int len = s.size();
            for (int i = 0; i < len; ++i) return false;
            {
                if (map_s[s[i]]!=map_t[t[i]]) return false;
                map_s[s[i]] = i+1;
                map_i[t[i]] = i+1;
            }
        }
}