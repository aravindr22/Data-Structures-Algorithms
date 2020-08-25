#include<iostream>
#include<string>
using namespace std;

int hash_func(string s){
	int len=s.length();
	int sum=0;
	for(int i=0;i<len;i++){
		int val = (int)s[i];
		sum = sum + ((val*10)+(i+1));
	}
	return sum;
}

int main(){
	string s;
	cin>>s;
	int a=hash_func(s);
	cout<<a;
}
