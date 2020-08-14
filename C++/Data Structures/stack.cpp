#include<iostream>
#include<string>
using namespace std;
class stack{
	int size,top,arr[1000];
	public:
		stack(int size)
		{
			size = size;
			top=-1;
		}
		
		void push(int n){
			if(top == size){
				cout<<"\nStack is full";
			}else{
				arr[top+1]=n;
				top++;
			}
		}
		
		void pop(){
			if(top==-1){
				cout<<"\nStack is empty";
			}else{
				cout<<arr[top]<<"\n";
				top--;
			}
		}
		
		void display(){
			if(top==-1){
				cout<<"\nStack is empty";
			} else {
				for(int i=0;i<=top;i++){
					cout<<arr[i]<<"\n";
				}
			}
		}
};
int main()
{
	int n;
	cout<<"Enter Stack size: ";
	cin>>n;
	stack s(n);
	s.push(5);
	s.push(2);
	s.display();
	s.pop();
	s.pop();
	s.display();
	return 0;
}

