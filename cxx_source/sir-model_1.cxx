// https://atcoder.jp/contests/abc127/tasks/abc127_f

#include <bits/stdc++.h>

using namespace std;

#define REP(i,n)   for(int i=0; i<(int)(n); i++)
#define FOR(i,b,e) for(int i=(b); i<=(int)(e); i++)
#define DUMP(a, n) REP(_i, n) printf("%d%c", a[_i], _i + 1 == n ? '\n' : ' ')
#define DUMP2D(a, n, m) REP(_i, n) REP(_j, m) printf("%d%c", a[_i][_j], _j + 1 == m ? '\n' : ' '); puts("")

int N;
int D;
double K;

void solve() {
  vector<double> v;
  double cur = 0;
  double acc = 0;
  double nxt = 1;
  printf("N=%d D=%d K=%lf\n", N, D, K);
  printf("day\tcur\tacc\tnxt\n");
  FOR(day, 1, 1000) {
    v.push_back(nxt);
    if (v.size() > D) v.erase(v.begin());
    acc += nxt;
    cur = 0;
    REP(i, D) cur += v[i];
    printf("%d\t%.0lf\t%.0lf\t%.0lf\n", day, cur, acc, nxt);
    if (cur < 1) break;
    nxt = cur * K * (N - acc) / N;
  }
}

void input() {
  scanf("%d", &N);
  scanf("%d", &D);
  scanf("%lf", &K);
}

int main() {
  input();
  solve();
  return 0;
}
