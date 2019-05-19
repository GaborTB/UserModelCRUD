set CURRENT_FOLDER=%cd%

cd ..\DerivcoUserModel\DerivcoUserModel.Data
rd Migrations /s /q
dotnet ef migrations add InitialCreate

cd %CURRENT_FOLDER%
sqlcmd -S localhost -d master -E -i dropDB.sql
pause
