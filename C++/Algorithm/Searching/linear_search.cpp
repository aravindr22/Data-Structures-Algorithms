#include<iostream>
#include<string>
using namespace std;

int main(){
	int arr[10000],n,m,pos=-1;
	cin>>n>>m;
	for(int i=0;i<n;i++){
		cin>>arr[i];
	}
	for(int i=0;i<n;i++){
		if(arr[i]==m){
			pos=i;
		}
	}
	cout<<pos+1;
	return 0;
}
