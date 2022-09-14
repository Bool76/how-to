---
lang: en-US
title: slr2 | Model View Controller
description: Description of this page
tags: [
    "Interacting files",
    "mvc",
    "slr2 mvc",
    "slr2 architecture",
    "C# architecture"
    ]
---

# slr2 | Model View Controller

Summary - How files interact in slr2 regarding model view controller 

### File Heirarchy Overview

-> Models<br>
--> Publication<br> 
---> PublicationViewModel.cs<br>

-> Services<br>
--> Models<br>
---> SramPublication.cs<br>
--> PublicationMappingService.cs

-> Views  
--> Contentful    
---> Index.cshtml     
--> Shared  
---> _Layout.cshtml  

### Heirarchy Details

#### Models / Publication   
Instance of a model is created so that it can be used. Alex called this the Presentation Model

>e.g. PublicationViewModel.cs

- Creates an object called "PublicationViewModel"
- Attributes are identified that make it up
- Those attributes are identified to come from a JSON source


#### Services / Model   
Creates a data object to call. It provides stored data for the Presendation Models to call and use. Alex called these Perisistance Models

>e.g. ContentfulObjects.cs

- Creates an instance of PublicationViewModel that a presentation layer can use (e.g. _layer.cshtml)  

#### Views   
Frontend layer that displays content
>e.g. _layout.cshtml 

- Is directly calling / using the attribute from the "Model" object
- Is calling "Model.MetaDescription

:zap: But how does it have access to it?

