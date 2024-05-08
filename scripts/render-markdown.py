import sys
import json

header = """# Anicca AOSC
This is a small utility to run `aosc-findupdate` regularly by GitHub Actions.
## Result"""

if __name__ == "__main__":
    print(header)
    print("| Package | Repo Version | New Version | Path | Warnings |")
    print("|---------|--------------|-------------|------|----------|")

    table = json.loads(sys.stdin.read())

    for row in sorted(table, key=lambda x: x["name"]):
        row["before"] = row["before"].replace("+", "<br>+")
        row["warnings"] = "<br>".join(row["warnings"])

        print("|" + "|".join(row.values()) + "|")
