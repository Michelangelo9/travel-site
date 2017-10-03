var gulp = require("gulp"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	simpleVars = require("postcss-simple-vars"),
	stylelint = require("stylelint"),
	nested = require("postcss-nested"),
	reporter = require("postcss-reporter"),
	cssImport = require("postcss-import"),
	mixins = require("postcss-mixins");

// Stylelint config rules
var stylelintConfig = {
  "rules": {
    //"at-rule-blacklist": string|[],
    "at-rule-empty-line-before": "always",
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
	
    //"block-closing-brace-empty-line-before": "never",
    "block-no-empty": true,
    "color-hex-case": "lower",
    "color-named": "never",
    "color-no-invalid-hex": true,
	/*
    "custom-media-pattern": string,
    "custom-property-empty-line-before": "always"|"never",
    "custom-property-pattern": string,
    "declaration-bang-space-after": "always"|"never",
    "declaration-bang-space-before": "always"|"never",
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always"|"always-multi-line"|"never-multi-line",
    "declaration-block-semicolon-newline-before": "always"|"always-multi-line"|"never-multi-line",
    "declaration-block-semicolon-space-after": "always"|"never"|"always-single-line"|"never-single-line",
    "declaration-block-semicolon-space-before": "always"|"never"|"always-single-line"|"never-single-line",
    "declaration-block-single-line-max-declarations": int,
    "declaration-block-trailing-semicolon": "always"|"never",
    "declaration-colon-newline-after": "always"|"always-multi-line",
    "declaration-colon-space-after": "always"|"never"|"always-single-line",
    "declaration-colon-space-before": "always"|"never",
    "declaration-empty-line-before": "always"|"never",
    "declaration-no-important": true,
    "declaration-property-unit-blacklist": {},
    "declaration-property-unit-whitelist": {},
    "declaration-property-value-blacklist": {},
    "declaration-property-value-whitelist": {},
    "font-family-name-quotes": "always-where-required"|"always-where-recommended"|"always-unless-keyword",
    "font-family-no-duplicate-names": true,
    "font-weight-notation": "numeric"|"named",
    "function-blacklist": string|[],
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always"|"always-multi-line"|"never-multi-line",
    "function-comma-newline-before": "always"|"always-multi-line"|"never-multi-line",
    "function-comma-space-after": "always"|"never"|"always-single-line"|"never-single-line",
    "function-comma-space-before": "always"|"never"|"always-single-line"|"never-single-line",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": int,
    "function-name-case": "lower"|"upper",
    "function-parentheses-newline-inside": "always"|"always-multi-line"|"never-multi-line",
    "function-parentheses-space-inside": "always"|"never"|"always-single-line"|"never-single-line",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always"|"never",
    "function-url-scheme-blacklist": string|[],
    "function-url-scheme-whitelist": string|[],
    "function-whitelist": string|[],
    "function-whitespace-after": "always"|"never",
    "indentation": int|"tab",
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": int,
    "max-line-length": int,
    "max-nesting-depth": int,
    "media-feature-colon-space-after": "always"|"never",
    "media-feature-colon-space-before": "always"|"never",
    "media-feature-name-blacklist": string|[],
    "media-feature-name-case": "lower"|"upper",
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-name-whitelist": string|[],
    "media-feature-parentheses-space-inside": "always"|"never",
    "media-feature-range-operator-space-after": "always"|"never",
    "media-feature-range-operator-space-before": "always"|"never",
    "media-query-list-comma-newline-after": "always"|"always-multi-line"|"never-multi-line",
    "media-query-list-comma-newline-before": "always"|"always-multi-line"|"never-multi-line",
    "media-query-list-comma-space-after": "always"|"never"|"always-single-line"|"never-single-line",
    "media-query-list-comma-space-before": "always"|"never"|"always-single-line"|"never-single-line",
    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,
    "number-leading-zero": "always"|"never",
    "number-max-precision": int,
    "number-no-trailing-zeros": true,
    "property-blacklist": string|[],
    "property-case": "lower"|"upper",
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,
    "property-whitelist": string|[],
    "rule-empty-line-before": "always"|"never"|"always-multi-line"|"never-multi-line",
    "selector-attribute-brackets-space-inside": "always"|"never",
    "selector-attribute-operator-blacklist": string|[],
    "selector-attribute-operator-space-after": "always"|"never",
    "selector-attribute-operator-space-before": "always"|"never",
    "selector-attribute-operator-whitelist": string|[],
    "selector-attribute-quotes": "always"|"never",
    "selector-class-pattern": string,
    "selector-combinator-space-after": "always"|"never",
    "selector-combinator-space-before": "always"|"never",
    "selector-descendant-combinator-no-non-space": true,
    "selector-id-pattern": string,
    "selector-list-comma-newline-after": "always"|"always-multi-line"|"never-multi-line",
    "selector-list-comma-newline-before": "always"|"always-multi-line"|"never-multi-line",
    "selector-list-comma-space-after": "always"|"never"|"always-single-line"|"never-single-line",
    "selector-list-comma-space-before": "always"|"never"|"always-single-line"|"never-single-line",
    "selector-max-attribute": int,
    "selector-max-class": int,
    "selector-max-combinators": int,
    "selector-max-compound-selectors": int,
    "selector-max-empty-lines": int,
    "selector-max-id": int,
    "selector-max-specificity": string,
    "selector-max-type": int,
    "selector-max-universal": int,
    "selector-nested-pattern": string,
    "selector-no-qualifying-type": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-blacklist": string|[],
    "selector-pseudo-class-case": "lower"|"upper",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "always"|"never",
    "selector-pseudo-class-whitelist": string|[],
    "selector-pseudo-element-case": "lower"|"upper",
    "selector-pseudo-element-colon-notation": "single"|"double",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower"|"upper",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "single"|"double",
    "time-min-milliseconds": int,
    "unit-blacklist": ["px"],
    "unit-case": "lower"|"upper",
    "unit-no-unknown": true,
    "unit-whitelist": ["rem", "em"],
    "value-keyword-case": "lower"|"upper",
    "value-list-comma-newline-after": "always"|"always-multi-line"|"never-multi-line",
    "value-list-comma-newline-before": "always"|"always-multi-line"|"never-multi-line",
    "value-list-comma-space-after": "always"|"never"|"always-single-line"|"never-single-line",
    "value-list-comma-space-before": "always"|"never"|"always-single-line"|"never-single-line",
    "value-list-max-empty-lines": int,
    "value-no-vendor-prefix": true
	*/
  }
};

gulp.task("css", function(){
	
	return gulp.src("./app/assets/css/styles.src.css")
		.pipe(postcss([
			cssImport,
			mixins,
			simpleVars, 
			nested, 
			stylelint(stylelintConfig), 
			reporter({
				//clearReportedMessages: true,
				clearMessages: true,
				throwError: true
			}), 
			autoprefixer
			]))
		.on("error", function(errorInfo){
			console.log(errorInfo.toString());
			this.emit("end");
		})
		.pipe(gulp.dest("./app/temp/css"));
		
});