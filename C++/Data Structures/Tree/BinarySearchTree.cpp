#include<iostream>
#include<algorithm>
using namespace std;

struct newNode{
	int data;
	newNode* left;
	newNode* right;
};

int left_max =0,right_max=0;

newNode* getNode(int data){
	newNode* temp = new newNode();
	temp->data = data;
	temp->left = temp->right = NULL;
	return temp;
}

newNode* insert(newNode* root,int data){
	if(root == NULL){
		root=getNode(data);
	}
	else if(data <= root->data){
		root->left = insert(root->left, data);
	}
	else if(data > root->data){
		root->right = insert(root->right, data);
	}
	return root;
}

bool search(newNode* root,int val){
	if(root==NULL){
		return false;
	}
	else if(root->data == val){
		return true;
	}
	else if(val <= root->data){
		search(root->left,val);
	}
	else if(val > root->data){
		search(root->right,val);
	}
}

int maxDepth(newNode* root){
	if(root == NULL){
		return 0;
	}
	
	left_max = maxDepth(root->left);
	right_max = maxDepth(root->right);
	
	return max(left_max,right_max) +1;
}

newNode* findMin(newNode* root){
	while(root->left != NULL){
		root = root->left;
	}
	return root;
}

newNode* deleteNode(newNode* root, int data){
	if(root == NULL){
		return root;
	}
	else if(data < root->data){
		root->left = deleteNode(root->left,data);
	}
	else if(data > root->data){
		root->right = deleteNode(root->right,data);
	}
	else{
		//Case-1: NO CHILD
		if(root->left == NULL && root->right == NULL){
			delete root;
			root = NULL;			
		}
		
		//Case-2: One Child
		else if(root->left == NULL){
			newNode* temp = root;
			root = root->left;
			delete temp;
		}
		else if(root->right == NULL){
			newNode* temp = root;
			root = root->right;
			delete temp;
		}		
		
		//Case 3:- Two Child
		else{
			newNode* temp = findMin(root->right);
			root->data = temp->data;
			root->right = deleteNode(root->right,temp->data);
		}
	}
	return root;
	
}

int main(){
	newNode* root=NULL;
	int n,x,ans;
	cout<<"Enter An Option: ";
	cout<<"\n1)Insert\t2)Search\t3)Max Depth\n4)Delete Node\t5)Exit"<<endl;
	do{
		cin>>n;
		switch(n){
			case 1: 
				cout<<"\nEnter a Number: ";
				cin>>x;
				root = insert(root,x); break;
			
			case 2:
				cout<<"\nEnter a Number to Search: ";
				cin>>x;
				ans = search(root,x);
				if(ans == true){ cout<<"\nFound"<<endl; }
				else { cout<<"\nNot Found"<<endl; }
				break;
			
			case 3:
				cout<<"\nThe Max-Depth of the tree is: "<<maxDepth(root)<<endl;
				break;
			
			case 4:
				cout<<"\nEnter the value to be Deleted: ";
				cin>>x;
				root = deleteNode(root,x);
				break;
			
		}
	}while(n<5);
	return 0;
}
