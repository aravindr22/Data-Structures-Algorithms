#include<iostream>
#include<string>
using namespace std;

class queue{
	int size,front,rear,arr[100];
	public:
		queue(int x){
			size = x;
			front=0;
			rear=-1;
		}
		void enqueue();
		void dequeue();
		void display();
};

void queue::enqueue(){
	int x;
	cout<<"Enter a number: ";
	cin>>x;
	if((rear-front)==size){
		cout<<"\nQueue overflow"<<endl;
	} else {
		rear++;
		arr[rear]=x;
	}
}

void queue::dequeue(){
	if(rear<front){
		cout<<"\nQueue is empty"<<endl;
	} else {
		cout<<arr[front]<<endl;
		front++;
	}
}

void queue::display(){
	if(rear<front){
		cout<<"\nQueue is empty"<<endl;
	} else {
		for(int i=front;i<=rear;i++){
			cout<<arr[i]<<" ";
		}
	}
}

int main()
{
	int size,n;
	cout<<"\nEnter the Queue size: ";
	cin>>size;
	queue o(size);
	cout<<"\n1)enqueue\t2)Dequeue\t3)Display\t4)Exit"<<endl;
	do 
	{
		cin>>n;
		switch(n){
			case 1: o.enqueue(); break;
			case 2: o.dequeue(); break;
			case 3: o.display(); break;
			case 4: break;
			default: cout<<"Enter a vaid number"<<endl;
		}
		
	}while(n<4);
	return 0;
}
