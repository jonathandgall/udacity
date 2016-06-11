**What happens when you initialize a repository? Why do you need to do it?**
* A git file is created in the directory. It's hided so to reveal it, you need to ls -a. 
* We need to do it to tell the system that a git repository exist here and save the metadata linked.

**How is the staging area different from the working directory and the repository?
What value do you think it offers?**
* The repository is where we input the data at the end.
* The working directory is the local place where we do our work.
* The staging area is where we place the data we will want to commit next in our repository. It gives you the ability to choose exacty what you will want to commit next.

**How can you use the staging area to make sure you have one commit per logical change?**
* You do all your changes and perhaps more. 
* Then you would select the changes which have the same logic behinf with git add. 
* They are now on staging. You commit what is now in staging with git commit and you add a message explaining this logical change.

**What are some situations when branches would be helpful in keeping your history organized? How would branches help?**
* Branches are useful for experimentations without hindering the main development track.

**How do the diagrams help you visualize the branch structure?**
* Diagram gives me the ability to have a bird eye view on how the code has been structured from the get-go, including mergings 
* Diagrams accessible with git log --graph --online gives me the ability to quickly vizualize the changes chronologically over multiple branches. 
* This way I know when a branch wa created and how much changes occured in the master branches - or other branches - since its creation.

**What is the result of merging two branches together? Why do we represent it in the diagram the way we do?**
* Merging enables us to reconciles the work make by different people or the same person with different objectives on the same main branch. 
* We represent it the way we do on the diagram to see the difference in evolution in the work of those different individual/features before the merge.

**What are the pros and cons of Git’s automatic merging vs. always doing merges manually?**
 * Pros: Automatic commiting saves time, it's reliable
 * Con: Lose flexibility, might miss issues