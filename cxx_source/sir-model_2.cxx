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
  double susceptable = N;
  double infected = 0;
  double recovered = 0;
  double nxt = 1;
  printf("N=%d D=%d K=%lf\n", N, D, K);
  printf("day\tS\tI\tR\n");
  printf("%d\t%.0lf\t%.0lf\t%.0lf\n", 0, susceptable, infected, recovered);
  FOR(day, 1, 1000) {
    susceptable -= nxt;
    v.push_back(nxt);
    if (v.size() > D) {
      recovered += v[0];
      v.erase(v.begin());
    }
    infected = 0;
    REP(i, D) infected += v[i];
    printf("%d\t%.0lf\t%.0lf\t%.0lf\n", day, susceptable, infected, recovered);
    if (infected < 0.5) break;
    nxt = K * infected * susceptable / N;
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
