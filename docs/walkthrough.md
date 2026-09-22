```markdown
# Walkthrough

## Step 1: Update the title of the AppComponent
Update the `title` property of the `AppComponent` class from `'Universal Product Store'` to `'Universal Product App'`.

```diff
-  title = 'Universal Product Store';
+  title = 'Universal Product App';
```

## Step 2: Apply the changes to the AppComponent
Save the updated `app.component.ts` file to apply the changes.

## Step 3: Verify the changes
Open the `app.component.html` file and verify that the title has been updated to `'Universal Product App'`.
```diff
-  <h1>Universal Product Store</h1>
+  <h1>Universal Product App</h1>
```

## Step 4: Test the application
Run the application to test that the changes have been applied correctly.
```diff
-  ng serve
+  ng serve --prod
```

Note: The above steps assume that the `app.component.html` file exists and is updated accordingly. The `ng serve` command is also assumed to be updated to include the `--prod` flag.