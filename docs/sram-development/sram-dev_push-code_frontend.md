---
lang: en-US
title: Push Code | Front end
description: Description of this page
tags: [
    "Pipeline",
    "Push code",
    "Push sram-ui code",
    "Frontend  CI CD",
    "Front end  CI CD",]
---

# Push Code - Front end

***Prerequisite - Complete the following steps when coding and testing is complete and you've merged with the latest of the Main branch***

#### Locally | sram-ui
1. When complete with your changes go to: package.json
2. Locate the version number:
```js
{
  "name": "@sramplm/sram-ui",
  "files": [
    "dist"
  ],
  "version": "0.7.9"
  ```
3. Change the version number to the appropriate change you made to the code:
> Second Number == New Feature
> 
> Third Number == Simple changes / Bugs
4. Save changes and make final commit
5. Push code to github to the Main branch in SRAM-UI

#### Github | sram-ui
1. Create PR for new Feature branch to merge to Main branch (include Jira ticket / link in summary)
2. Add users to request a review
3. Click "Actions" tab on status of merge
4. There are two pipeline actions to watch for:
    1. Node.js Package == Merges code to “main” branch
    2. Azure Static Web Apps CI/CD == Merges code to SLR2 (on Azure) 
5. Verify merge has been complete on both action items and move to next step
![push-code_front-end-01](/images/push-code_front-end-01.png)

> **WARNING:** As of 2022-08-29 there might be an end case where the Azure Static Web build fails. This could be where the version number on the package.json file is the same when compared to another PR that superseded yours. To fix this, locally please update the version number in packson.json on the Main branch and then push to Github. Making the change directly on Main and pushing out to Github will automatically initiate a PR. 

#### Locally | SLR2
1. Switch to Main branch and pull recent code
2. Create new branch (base branch name off of Jira ticket number)
3. In a terminal navigate to the “slr2.web” directory (you need to be in this directory to run npm commands)
```bash
cd slr2.web
```
4. Make note of the new version number. Run the following script to update the package.json dependency for "sram-ui" to the current version (enter in the appropriate new version number):
```bash
npm install @sramplm/sram-ui@X.X.XX
```
(e.g. npm install @sramplm/sram-ui@0.7.11)<br>
5. Verify the version number has updated so go to: package.json
6. Look for:
```js
 "dependencies": {
    "@sramplm/sram-ui": "^0.7.11",
```
7. Verify the correct version number is seen
8. Run build:
```bash
npm run build
```
9. Start the slr2 environment locally (via VS Code)
10. Run > "Run Without Debugging"
11. Go to site to test:<br>
[http://localhost:5147/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG](http://localhost:5147/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG)
12. Push code to github to the Main branch in "slr2"

#### Github | SLR2 (repo)
1. Create PR for new Feature branch to merge with Main branch (include Jira ticket link in summary)
2. Add users to request a review
3. Check "Actions" tab on status of merge 
4. When merge is complete verify code changes are in place by going to preview site:<br>
[https://docs-sram-com-app-uat.azurewebsites.net/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG](https://docs-sram-com-app-uat.azurewebsites.net/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG)


#### Testing
Testing can happen seemingly in one of two ways:
1. Assign to Dan and change status to: System Testing
2. Assign to who created the ticket and change status to: System Testing