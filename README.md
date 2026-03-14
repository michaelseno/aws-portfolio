# Portfolio (Static)

A lightweight static portfolio site showcasing my automation and cloud projects.

## Narrative planning
- `PORTFOLIO_NARRATIVE_PLAN.md` – strategic messaging plan for positioning around TestOrbit (technical POC) and ReliabilityKit (MVP).

## Live project demos referenced
- TestOrbit frontend: `https://d35l48aa0loqlr.cloudfront.net/`
- ReliabilityKit dashboard: `https://rk-reliability.s3.amazonaws.com/dashboard.html`

## Edit
- `index.html` – content
- `style.css` – styling
- `script.js` – small interactions

## Local preview
Open `index.html` in a browser or serve locally with any static server (e.g., `npx serve .`).

## CI/CD (GitHub Actions → S3)
- Workflow: `.github/workflows/deploy.yml` runs on pushes to `main` or manual dispatch and uploads the repo root to `s3://aws-personal-portfolio-bucket` (Region: `us-east-1`) without deleting extra files. Excludes `.git/*` and `.github/*`.
- Public site URL: `http://aws-personal-portfolio-bucket.s3-website-us-east-1.amazonaws.com`

### One-time AWS setup (OIDC)
1) Create an IAM role (e.g., `github-oidc-s3-deploy-portfolio`) in your AWS account with trusted entity **Web identity** `token.actions.githubusercontent.com`, audience `sts.amazonaws.com`, and condition `token.actions.githubusercontent.com:sub = repo:michaelseno/aws-portfolio:ref:refs/heads/main`.  
2) Attach this inline policy (no deletes):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "s3:PutObject",
           "s3:PutObjectAcl",
           "s3:GetObject",
           "s3:ListBucket"
         ],
         "Resource": [
           "arn:aws:s3:::aws-personal-portfolio-bucket",
           "arn:aws:s3:::aws-personal-portfolio-bucket/*"
         ]
       }
     ]
   }
   ```
3) Copy the role ARN (format `arn:aws:iam::<ACCOUNT_ID>:role/<ROLE_NAME>`) and add it to the GitHub repo secret `AWS_DEPLOY_ROLE_ARN`.

### Manual deploy (optional)
If you need a quick push outside CI:
```bash
aws s3 sync . s3://aws-personal-portfolio-bucket --exclude ".git/*" --exclude ".github/*"
```
