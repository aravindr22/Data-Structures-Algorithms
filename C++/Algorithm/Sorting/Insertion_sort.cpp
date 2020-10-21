#include<iostream>
using namespace std;

int main(){
	int n,temp,a[100000];
	cin>>n;
	for(int i=0;i<n;i++){
		cin>>a[i];
	}
	int j;
	for(int i=0;i<n;i++){
		temp=a[i];
		j=i;
		while( j>0 && temp < a[j-1]){
			a[j] = a[j-1];
			j=j-1;
		}
		a[j] = temp;
	}
	for(int i=0;i<n;i++){
		cout<<a[i]<<" ";
	}
}
