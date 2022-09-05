# PROBLEM STATEMENT
#  Given the root of a binary tree, return the preorder traversal of its nodes' values.

# SOLUTION
#  Write a recursive function with the base condition checking if there is a root. The recursive function should return
# a list with the root value and append to it with recursion on the left values then the right values
from typing import Optional, List
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Recursive solution


class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []
        return [root.val] + self.preorderTraversal(root.left) + self.preorderTraversal(root.right)

#  Iterative solution


class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        output, nodestack = [], [root]

        while nodestack:
            node = nodestack.pop()
            if node:
                output.append(node.val)
                nodestack.append(node.right)
                nodestack.append(node.left)
        return output
