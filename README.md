# webprog
Code in the course in web programming at Faculty of Engineering, LTH, Lund University.

Course homepage: http://cs.lth.se/edaf90/

This is on-going work, and the first instance of the course was given in 2019 at Lund University. A new instance of the course is given each spring semester.

## How to contribute to this repo

### Fork and clone

* Learn the basics about git, especially the "Getting Started" and "Git Basics" sections in this book: https://git-scm.com/book/en/v2

* Get an account at Github if you don't have one already. Recommended user name if in doubt: `firstnamefamilyname` with no capital letters and no hyphens.

* Install git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

* Make a **fork** of lunduniversity/introprog in GitHub to your own GitHub account: https://help.github.com/articles/fork-a-repo/

* **Clone** your fork to your local computer: https://help.github.com/articles/cloning-a-repository/

### Keeping your fork in synch

* If you install the GitHub client (avaliable for Win and Mac but not Linux) called "GitHub desktop" https://desktop.github.com/ you can keep your fork in synch with the upstream repo by a single click in the GUI.

* Otherwise, this is how to pull changes from upstream to your fork with git commands: https://help.github.com/articles/syncing-a-fork/

### Making contributions

* If you find a typo or minor issue that is straight-forward to fix you are very welcome to create a pull request directly as explained below. But if your contribution is more significant you should open an issue first and start a discussion about your proposal. In the latter case, click the issue tab at the top of this page.

* Before you change locally, make sure your fork is in synch (see above). Frequently do `git pull` or press the synch button in the GitHub desktop GUI.

* You must check that your fix compiles (to Latex or passes jslint) before you commit.

* Whenever you are ready with an incremental change, do `git commit -m "msg"` and then `git push`, or commit in the GUI and press the synch button. Think carefully about your commit message, as discussed in the next section.

* When you are ready with a contribution that is good enough to be incorporated in upstream, then create a pull request: https://help.github.com/articles/creating-a-pull-request/

* Keep your pull requests minimal and coherent to create a small change sets that will be easy to merge as a single unit. Don't pack a lot of unrelated changes in the same pull request. Take a look [here](https://github.com/lunduniversity/webprog/pulls?q=is%3Apr+is%3Aclosed) for examples of previously accepted pull requests.

* Don't include pdf:s or binaries in the pull request. The maintainers will recompile the repo after your pull request has been merged. You can then checkout your pdf:s before you synch with upstream.


### Writing commit messages

* Write concise and informative [commit messages](http://chris.beams.io/posts/git-commit/) that explains why the commit was made.
* Start each commit message with a direct verb, preferably one of the following:
  * `add` when you have created new stuff that was not there before
  * `update` when you have changed existing stuff
  * `fix` when you have corrected a bug or fixed a typo etc.
  * `remove` when you have removed stuff
  * `rename` when you have renamed files or other stuff without changing appearance/meaning
  * `refactor` when you have changed things structurally but not changed actual appearance/meaning
* Example of commit messages
  * `git commit -am "update exercise w03 to improve explanation"`
  * `git commit -am "add task in exercises w05 vector copy"`
* Make small commits and commit often. Try to keep commits atomic and only within one file if meaningful.
* Make sure your change compiles before committing. Do *not* push code that does not compile!


### Latex guide

* Make sure you have your TeX editor set to UTF-8 encoding. If you get strange errors in relation to Swedish characters, this is likely due to problems relating to non-UTF-8 encodings on Mac or Windows. Linux usually works out-of-the-box.


* Install [texlive-full](https://www.tug.org/texlive/) to get all extra latex stuff that is needed to compile the tex code in this repo. If you don't know which tex editor to use, try [texworks](https://www.tug.org/texworks/).

* Check out some similar, already written `.tex` document and compare with the compiled `.pdf` to see the commands and conventions we use.

* Some custom latex commands in our .cls files:
  * `\begin{Code}` ... `\end{Code}` and `\scalainputlisting{examples/hello-app.scala}` are used for Scala code

# License

Copyright &copy; 2015-2019. Dept. of Computer Science at Lund University, Lund, Sweden.

Contributors: https://github.com/lunduniversity/webprog/TBA

This work is licensed under a
Creative Commons Attribution-ShareAlike 4.0 International License.


You are free to:

* Share — copy and redistribute the material in any medium or format
* Adapt — remix, transform, and build upon the material for any purpose, even commercially.
* The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

* Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
*  ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
* No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.


See http://creativecommons.org/licenses/by-sa/4.0/
