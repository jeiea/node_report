# node_report

Just for reporting.

## Steps to reproduce

1. Execute the following

```
git clone https://github.com/jeiea/node_report.git
cd node_report
pnpm i
pnpm panda
pnpm run dev
```

2. Open http://localhost:5173

## Expected behavior

Github icon should be places at the bottom of the page because body > div's class contains `d_flex h_100%` and div > main's class contains `flex_1`.

## Actual behavior

Github icon is located right after button.
