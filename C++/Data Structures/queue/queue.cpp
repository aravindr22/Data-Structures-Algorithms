#include<iostream>
#include<string>
using namespace std;

class queue{
	int size;
	public:
		queue(int x){
			size = x;
		}
};

int main()
{
	int size;
	cout<<"\nEnter the Queue size: ";
	cin>>size;
	queue o(size);
	return 0;
}
