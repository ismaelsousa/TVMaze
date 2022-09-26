# TVMaze App

An app to search shows, people, and favorites

[TvMaze API](https://www.tvmaze.com/api)

## Features

## Pin code

Ios | Android
:-: | :-:
<video src='https://user-images.githubusercontent.com/28990749/192304814-47d91785-b7b1-4fc9-a2ed-e3cb0d24c2da.mov' width=180/> | <video src='https://user-images.githubusercontent.com/28990749/192304751-39532a9f-843c-4c94-9ddf-eb1d048e8a7b.mov' width=180/>

### Show list with paging scheme

Ios | Android
:-: | :-:
<video src='https://user-images.githubusercontent.com/28990749/192160286-3550d6d5-1fc3-49b0-b49c-0a2f028340f5.mov' width=180/> | <video src='https://user-images.githubusercontent.com/28990749/192160291-30fc21a1-db64-4dec-be7b-78323811b825.mov' width=180/>





### Search show


Ios | Android
:-: | :-:
<video src='https://user-images.githubusercontent.com/28990749/192160748-64b66c82-9f23-42c9-b475-c19bedad4fe8.mov' width=180/> | <video src='https://user-images.githubusercontent.com/28990749/192160747-f2e85690-b434-47d4-b60b-f60bcc464a22.mov' width=180/>





### Show details


Ios | Android
:-: | :-:
<video src='https://user-images.githubusercontent.com/28990749/192161036-2ab7bf77-3cae-4f18-8eb6-11c42c2a7c3b.mov' width=180/> | <video src='https://user-images.githubusercontent.com/28990749/192161034-40fc3395-8bd0-45be-ad36-da8e75709921.mov' width=180/>



### Favorite


Ios | Android
:-: | :-:
<video src='https://user-images.githubusercontent.com/28990749/192161112-df60e162-a267-4838-a4b1-0c546def5985.mov' width=180/> | <video src='https://user-images.githubusercontent.com/28990749/192161111-f9788cab-414b-4a2b-af4f-62e271286812.mov' width=180/>






### Search people


Ios | Android
:-: | :-:
<video src='https://user-images.githubusercontent.com/28990749/192161192-b3bf0dba-d67c-4198-a878-72137a879383.mov' width=180/> | <video src='https://user-images.githubusercontent.com/28990749/192161187-53454db5-bf57-48b2-9c09-b8d014fa9a4c.mov' width=180/>


## Design

I did it with inspiration on **Netflix**

![image](https://user-images.githubusercontent.com/28990749/192162398-ea5d21bc-7213-4aa4-8982-267bf779f55a.png)

[Link to Figma](https://www.figma.com/file/0jGlxxKJD82RpG9FTRfecD/TVMaze?node-id=2%3A7)



## React Native


<p align='center'>
  <img 
       width='300px'
       src='https://assets-global.website-files.com/5d9bc5d562ffc2869b470941/5e1f9804b36ff7196d4b72a0_logo-react-native-tech.png' 
       alt='react native logo'
  />
</p>




[React-Native](https://reactnative.dev)
  - Version ~> "0.70.1"

## 🏗 Running

- Pre running (Android | Ios)
  - run `npm install`
- IOS:
  - run `npx pod-install && npx react-native run-ios`
- Android:   
  - run `npx react-native run-android`

## Folder structure

Model–view–viewmodel (MVVM)


[![Watch the video](https://user-images.githubusercontent.com/28990749/192161892-567a1e12-ed46-4f74-87bf-fbe99bb9513a.png)](https://youtu.be/RGRfXh54d9U)

[Whatch the video about mvvm | Portuguese](https://youtu.be/RGRfXh54d9U)


```plainText
TVMaze
.
.
├── android                     # Native android files
├── ios                         # Native ios files
├── src                         # Source files
│   ├── @types                  # Contains all global definitions of types and interfaces
│   ├── assets                  # Contains Js bundles assets. e.g: icons, images etc...
│   ├── common                  
│   │   ├── components    
│   │   ├── constants
│   │   ├── contexts
│   │   ├── hooks
│   │   ├── models
│   │   ├── utils
│   ├── Navigation     
│   │   ├── BottomTabNavigator
│   ├── repositories           # Contains external and api services
│   ├── screens
│   │   ├── view
│   │   ├── controller
│   │   ├── styles              
│   ├── App                     # Aplication entry
.
.
├── index                       # Bundle entry
.
.
└── README.md

```

  <img 
       width='200px'
       src='https://user-images.githubusercontent.com/28990749/192165315-76fe3419-7cdc-4a56-b37b-f0a54199c187.png' 
       alt='download the apk android'
  />
  
### Download the app




### Releases
[Releases](https://github.com/ismaelsousa/TVMaze/releases)

### PR

PR https://github.com/ismaelsousa/TVMaze/pull/1







