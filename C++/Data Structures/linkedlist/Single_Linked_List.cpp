#include<iostream>
#include<string>
using namespace std;

struct node{
	int data;
	struct node *next;
};

struct node *head;

void insertAtBeg(int x){
	struct node *temp;
	temp = new struct node;
	temp->data=x;
	temp->next=NULL;
	if(head == NULL){
		head=temp;
	} else {
		temp->next=head;
		head=temp;
	}
}

void insertAtEnd(int x){
	struct node *temp;
	struct node *curr;
	temp = new struct node;
	temp->data=x;
	temp->next=NULL;
	if(head==NULL){
		head=temp;
	} else {
		for(curr=head;curr->next!=NULL;curr=curr->next);
		curr->next=temp;
	}
}

void display(){
	struct node *temp;
	temp = head;
	while(temp!=NULL){
		cout<<temp->data<<endl;
		temp=temp->next;
	}
}

int main(){
	int x;
	
	for(int i=0;i<=10;i++){
		insertAtBeg(i);
		insertAtEnd(i);
	}
	display();
}
