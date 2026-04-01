# <p align="center">File permissions in Linux</p>

Project description
Assuming as a security professional at a large organization, I’m working with the research team. Ensuring the users on the teams are authorized with appropriate permissions to keep the system secure. In this project we are going to determine that permission matches the authorization given to each role. To complete the task, I performed the following task stated below:
Check file and directory details
The first thing I did is to print the working directory to keep track with where I am working with within the File Hierarchy Structure (FHS).

“””bash
pwd
“””

Currently we are inside the researcher’s team folder which is named as “researcher2/”, then we displayed the list of files and directories inside this folder including the hidden ones and their authorization status.

“””bash
ls -la
“””
ls – stands for list information
-l – is a long format listing that shows detailed information
-a – shows all files, including hidden files

Then we access the folder “projects” and committed the same commands to review all the file permissions inside the directory.

“””bash
cd projects
ls -la
“””

Based on the result of this command, we can now see the list of all files and directory. It is sorted according to name and directories are shown first. The hidden file is also showed, which usually starts with a dot (.). Inside the project directory, there consist of 5 different project text and 1 of them is hidden (.project_x.txt).
Describe the permissions string
In this example, the file permissions for project_t.txt are -rw-rw-r--. Since the first character is a hyphen (-), this indicates that project_t.txt is a file, not a directory. The second, fifth, and eighth characters are all r, which indicates that user, group, and other all have read permissions. The third and sixth characters are w, which indicates that only the user and group have write permissions. No one has execute permissions for project_t.txt.

Each file/directory has a permission string like:

“””bash
-rw-rw-r--
drwxr-xr-x
“””

Structure:
“””bash
[Type][Owner][Group][Others]
“””

1. File type - “d” (directory) or “–“ (regular file)
2. Permission groups (next 9 characters)
   a. It’s split into 3, with 3 characters each
3. First 3 split – User
4. Second 3 split – Group
5. Third 3 split - Others
   a. r - read
   b. w - write
   c. x - execute

Change file permissions
The organization determined that Others shouldn’t have write permission with the project. In this directory we determined that project_k.txt granted write permission to Others. So using the chmod (change mode) command in Linux, we can change each permission.

“””bash
chmod o-w project_k.txt
“””

Change file permissions on a hidden file
The research team has already achieved the project_x.txt and don’t want anyone aside from user and others to access it. The following code demonstrates how I used Linux commands to change the permissions:

“””bash
chmod u-w,g-w,g+r .project_x.txt
“””

Change directory permissions
The organization required that “drafts” directory execute permission should only be granted to the user. So, in this case I used the following command to remove execute permission to group.

“””bash
chmod g-x drafts
“””

Summary
In this project, I used Linux bash commands to access directories and show full details of the files inside. I also followed the organization requirement to secure files by setting permissions. Using the chmod command, I controlled access by allowing only selected users, groups, or others to view or modify the files.
