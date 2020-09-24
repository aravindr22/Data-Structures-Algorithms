#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

int Bsearch(int a[], int n, int key){
	int low,high;
	low = 0;
	high = n-1;
	while(low<=high)
	{
		int mid=(low+high)/2;
		if(a[mid]<key){
			low=mid+1;
		}
		else if(a[mid]>key){
			high=mid-1;
		} 
		else{
			return mid+1;
		}
	}
	return -1;
}

int main(){
	int a[10000],n,nq,q[1000],k,mid,val;
	cin>>n;
	for(int i=0;i<n;i++){
		cin>>a[i];
	}
	sort(a, a+n); //used to sort if the array is not sorted
	cin>>nq;
	for(int i=0;i<nq;i++){
		cin>>q[i];
	}
	for(int i=0;i<nq;i++){
		val = Bsearch(a, n, q[i]);
		cout<<val;	
	}
	return 0;
}
