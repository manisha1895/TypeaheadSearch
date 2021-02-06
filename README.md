This is a simple typeahead search.

STEPS to run in local :
1. install npm packages : `npm i`
2. install mysql driver in local from https://dev.mysql.com/downloads/mysql/
3. configure mysql server credentials for connection as :   
   username: root
   password: test1234
   OR update your local credentials in initDbQueries.dbConfig
3. build webpack : `npm run build`
4. start the local server :  `npm run start`
   This will ensure the necessary tables and values exist for search.
5. open dist/index.html in a browser
6. The search is for a simple entity - fruit and can be extended for bigger objects.

The dropdown options change with respect to input text and once selected will appear as a chip beside.
Selected entities even though displayed in the dropdown will not appear as chip if already selected once.
