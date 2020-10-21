#include<iostream>
using namespace std;

int main(){
	int n,x,a[100],min,t=0;
	cin>>n;
	for(int i=0;i<n;i++){
		cin>>a[i];
	}
	for(int i=0;i<n-1;i++){
			min=i;
			for(int j=i+1;j<n;j++){
				if(a[j]<a[min]){
					min=j;
				}
			}
			int temp;
			temp=a[i];
			a[i]=a[min];
			a[min]=temp;
			t++;
			
	}
	for(int i=0;i<n;i++){
		cout<<a[i]<<" ";
	}
}
