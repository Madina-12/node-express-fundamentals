//We can install npm packages globally and locally
//npm install -g <PackageName> for global and npm install <PackageName> for installing locally.
//Now installing globally is not beneficial much. alternative is npx.
//npm i nodemon -D     -D   means that a package is installed as dev dependency. not for production. it is only used while development. it would be shown in package.json as devdependency
//npm uninstall <packageName>
//Another way of uninstalling is that remove from package.json and delete package lock and node modules and then run npm install.

//npm init  for creating package.json
//npm init -y for default.

//there is a file naming .gitignore  in which   /node_modules    is written.

// in node modules , installed packages are placed. if we install one dependency, multiple folders may be shown, because one dependency may use multiple ones. e.g bootstrap uses jquery
// but in package.json  only installed dependencies are shown. Additionally installed dependencies are not shown. jquery would not be shown, only bootstrap would be shown.
// but in package lock  information is more detailed. here jquery would also be shown with version information.

// git add .        git commit -m "first commit"

// if we have package.json  then we have to run     npm install for node modules folder.

