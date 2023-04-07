#include <bits/stdc++.h>
using namespace std;

// structur to define a node of the doubly linked list 
struct node
{
    // part  which will store data
    int data; 
    // pointer to the previous node
    struct node *prev;
    // pointer to the next node
    struct node *next;
};

void instert_at_front(node** head, int data)
{
    // create a new node with given data
    node* new_node = new node();
    new_node->data = data;

    // assign previous pointer to NULL
    new_node->prev = NULL;

    // assign next pointer to the current head node
    new_node->next = (*head);

    // if list is not empty, set the current head's previous pointer
    if((*head) != NULL){
        (*head)->prev = new_node
    }

    // point the head to the new node
    (*head) = new_node;
}

void instert_at_end(node** head, int data)
{
    node* new_node = new node();
    new_node->data = data;

    new_node->next = NULL;

    if((*head) == NULL){
        new_node->prev = NULL;
    }

    node* end = (*head);

    while(end->next != NULL){
        end = end->next;
    }

    end->next = new_node;

    new_node->prev = end;

    return;
}

int main() {
    
    // create the head node of the list
    node* head_node = new node();
    // assing data the head node
    head_node->data = 5;
    // assign prev pointer to the head node
    head_node->data = NULL;

    // call the insert_at_front function four times
    insert_at_front(&head_node, 1);
    insert_at_front(&head_node, 2);
    insert_at_front(&head_node, 3);
    insert_at_front(&head_node, 4);

    while(head_node != NULL){
        cout<<head_node->data<< " ";
        head_node = head_node->next;
    }

    return 0;
}

