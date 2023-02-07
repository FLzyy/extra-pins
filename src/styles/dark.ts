import { GithubAPIResponse } from "../types/res.d.ts";
import languages from "../utils/languages.ts";

export default (
  res: GithubAPIResponse,
  fullName: boolean,
  params: { user: string; repo: string },
) => {
  return `<div id="DIV_1">
	<div id="DIV_2">
		<div id="DIV_3">
			<div id="DIV_4">
				<svg id="svg_5">
					<path id="path_6">
					</path>
				</svg> <a href="${res.html_url}" id="A_7"> <span id="SPAN_8">${
    fullName ? res.full_name : res.name
  }</span></a><span id="SPAN_9"></span><span id="SPAN_10">Public</span>
			</div>
			<div id="DIV_11">
				<input type="hidden" name="pinned_items_id_and_type[]" id="INPUT_12" value="596032126-Repository" /><span id="SPAN_13"></span>
				<svg id="svg_14">
					<path id="path_15">
					</path>
				</svg>
			</div>
		</div>
		<p id="P_22">
			${res.description}
		</p>
		<p id="P_23">
			 <span id="SPAN_24"><span id="SPAN_25"></span> <span id="SPAN_26">${res.language}</span></span><a href="https://github.com/${params.user}/${[
    params.repo,
  ]}/stargazers" id="A_27"></a>
			<svg id="svg_28">
				<path id="path_29">
				</path>
			</svg> ${res.stargazers_count}
		</p>
	</div>
</div>

<style>
#DIV_1 {
    block-size: 107px;
    border-block-end-color: rgb(48, 54, 61);
    border-block-end-style: solid;
    border-block-end-width: 1px;
    border-block-start-color: rgb(48, 54, 61);
    border-block-start-style: solid;
    border-block-start-width: 1px;
    border-end-end-radius: 6px;
    border-end-start-radius: 6px;
    border-inline-end-color: rgb(48, 54, 61);
    border-inline-end-style: solid;
    border-inline-end-width: 1px;
    border-inline-start-color: rgb(48, 54, 61);
    border-inline-start-style: solid;
    border-inline-start-width: 1px;
    border-start-end-radius: 6px;
    border-start-start-radius: 6px;
    box-sizing: border-box;
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    display: flex;
    height: 107px;
    inline-size: 440px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    overflow-wrap: break-word;
    padding-block-end: 16px;
    padding-block-start: 16px;
    padding-inline-end: 16px;
    padding-inline-start: 16px;
    perspective-origin: 220px 53.5px;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    transform-origin: 220px 53.5px;
    width: 440px;
    background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 1px solid rgb(48, 54, 61);
    border-radius: 6px;
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
    padding: 16px;
}/*#DIV_1*/

#DIV_1:after {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    display: block;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_1:after*/

#DIV_1:before {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    display: block;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_1:before*/

#DIV_2 {
    block-size: 73px;
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    box-sizing: border-box;
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    display: flex;
    height: 73px;
    inline-size: 406px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    overflow-wrap: break-word;
    perspective-origin: 203px 36.5px;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    transform-origin: 203px 36.5px;
    width: 406px;
    border: 0px none rgb(201, 209, 217);
    flex-flow: column nowrap;
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_2*/

#DIV_2:after {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    display: block;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_2:after*/

#DIV_2:before {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    display: block;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_2:before*/

#DIV_3 {
    block-size: 21px;
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    bottom: 0px;
    box-sizing: border-box;
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    display: flex;
    height: 21px;
    inline-size: 406px;
    inset-block-end: 0px;
    inset-block-start: 0px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    overflow-wrap: break-word;
    perspective-origin: 203px 10.5px;
    position: relative;
    right: 0px;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    top: 0px;
    transform-origin: 203px 10.5px;
    width: 406px;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_3*/

#DIV_3:after {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    display: block;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_3:after*/

#DIV_3:before {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    display: block;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_3:before*/

#DIV_4 {
    block-size: 21px;
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    box-sizing: border-box;
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    height: 21px;
    inline-size: 382px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    overflow-wrap: break-word;
    perspective-origin: 191px 10.5px;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    transform-origin: 191px 10.5px;
    width: 382px;
    border: 0px none rgb(201, 209, 217);
    flex: 1 1 0%;
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_4*/

#DIV_4:after {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_4:after*/

#DIV_4:before {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_4:before*/

#svg_5 {
    block-size: 16px;
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    display: inline-block;
    fill: rgb(139, 148, 158);
    height: 16px;
    inline-size: 16px;
    margin-inline-end: 4px;
    overflow-wrap: break-word;
    perspective-origin: 8px 8px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 8px 8px;
    vertical-align: text-bottom;
    width: 16px;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    margin: 0px 4px 0px 0px;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_5*/

#svg_5:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    fill: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_5:after*/

#svg_5:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    fill: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_5:before*/

#path_6 {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    d: path("M 2 2.5 A 2.5 2.5 0 0 1 4.5 0 H 13.25 A 0.75 0.75 0 0 1 14 0.75 V 13.25 A 0.75 0.75 0 0 1 13.25 14 H 10.75 A 0.75 0.75 0 1 1 10.75 12.5 H 12.5 V 10.5 H 4.5 A 1 1 0 0 0 3.786 12.2 A 0.75 0.75 0 0 1 2.714 13.25 A 2.495 2.495 0 0 1 2 11.5 V 2.5 Z M 12.5 1.5 V 9 H 4.5 C 4.144 9 3.806 9.074 3.5 9.208 V 2.5 A 1 1 0 0 1 4.5 1.5 H 12.5 Z M 5 12.25 V 15.5 A 0.25 0.25 0 0 0 5.4 15.7 L 6.85 14.613 A 0.25 0.25 0 0 1 7.15 14.613 L 8.6 15.7 A 0.25 0.25 0 0 0 9 15.5 V 12.25 A 0.25 0.25 0 0 0 8.75 12 H 5.25 A 0.25 0.25 0 0 0 5 12.25 Z");
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_6*/

#path_6:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_6:after*/

#path_6:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_6:before*/

#A_7 {
    border-block-end-color: rgb(88, 166, 255);
    border-block-start-color: rgb(88, 166, 255);
    border-inline-end-color: rgb(88, 166, 255);
    border-inline-start-color: rgb(88, 166, 255);
    box-sizing: border-box;
    caret-color: rgb(88, 166, 255);
    color: rgb(88, 166, 255);
    column-rule-color: rgb(88, 166, 255);
    margin-inline-end: 4px;
    overflow-wrap: break-word;
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(88, 166, 255);
    text-emphasis-color: rgb(88, 166, 255);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    word-break: break-word;
    border: 0px none rgb(88, 166, 255);
    font: 600 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    margin: 0px 4px 0px 0px;
    outline: rgb(88, 166, 255) none 0px;
}/*#A_7*/

#A_7:after {
    border-block-end-color: rgb(88, 166, 255);
    border-block-start-color: rgb(88, 166, 255);
    border-inline-end-color: rgb(88, 166, 255);
    border-inline-start-color: rgb(88, 166, 255);
    caret-color: rgb(88, 166, 255);
    color: rgb(88, 166, 255);
    column-rule-color: rgb(88, 166, 255);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(88, 166, 255);
    text-emphasis-color: rgb(88, 166, 255);
    text-size-adjust: 100%;
    word-break: break-word;
    border: 0px none rgb(88, 166, 255);
    font: 600 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(88, 166, 255) none 0px;
}/*#A_7:after*/

#A_7:before {
    border-block-end-color: rgb(88, 166, 255);
    border-block-start-color: rgb(88, 166, 255);
    border-inline-end-color: rgb(88, 166, 255);
    border-inline-start-color: rgb(88, 166, 255);
    caret-color: rgb(88, 166, 255);
    color: rgb(88, 166, 255);
    column-rule-color: rgb(88, 166, 255);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(88, 166, 255);
    text-emphasis-color: rgb(88, 166, 255);
    text-size-adjust: 100%;
    word-break: break-word;
    border: 0px none rgb(88, 166, 255);
    font: 600 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(88, 166, 255) none 0px;
}/*#A_7:before*/

#SPAN_8 {
    border-block-end-color: rgb(88, 166, 255);
    border-block-start-color: rgb(88, 166, 255);
    border-inline-end-color: rgb(88, 166, 255);
    border-inline-start-color: rgb(88, 166, 255);
    box-sizing: border-box;
    caret-color: rgb(88, 166, 255);
    color: rgb(88, 166, 255);
    column-rule-color: rgb(88, 166, 255);
    cursor: pointer;
    overflow-wrap: break-word;
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(88, 166, 255);
    text-emphasis-color: rgb(88, 166, 255);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    word-break: break-word;
    border: 0px none rgb(88, 166, 255);
    font: 600 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(88, 166, 255) none 0px;
}/*#SPAN_8*/

#SPAN_8:after {
    border-block-end-color: rgb(88, 166, 255);
    border-block-start-color: rgb(88, 166, 255);
    border-inline-end-color: rgb(88, 166, 255);
    border-inline-start-color: rgb(88, 166, 255);
    caret-color: rgb(88, 166, 255);
    color: rgb(88, 166, 255);
    column-rule-color: rgb(88, 166, 255);
    cursor: pointer;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(88, 166, 255);
    text-emphasis-color: rgb(88, 166, 255);
    text-size-adjust: 100%;
    word-break: break-word;
    border: 0px none rgb(88, 166, 255);
    font: 600 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(88, 166, 255) none 0px;
}/*#SPAN_8:after*/

#SPAN_8:before {
    border-block-end-color: rgb(88, 166, 255);
    border-block-start-color: rgb(88, 166, 255);
    border-inline-end-color: rgb(88, 166, 255);
    border-inline-start-color: rgb(88, 166, 255);
    caret-color: rgb(88, 166, 255);
    color: rgb(88, 166, 255);
    column-rule-color: rgb(88, 166, 255);
    cursor: pointer;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(88, 166, 255);
    text-emphasis-color: rgb(88, 166, 255);
    text-size-adjust: 100%;
    word-break: break-word;
    border: 0px none rgb(88, 166, 255);
    font: 600 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(88, 166, 255) none 0px;
}/*#SPAN_8:before*/

#SPAN_9 {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    box-sizing: border-box;
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    overflow-wrap: break-word;
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#SPAN_9*/

#SPAN_9:after {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#SPAN_9:after*/

#SPAN_9:before {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#SPAN_9:before*/

#SPAN_10 {
    border-block-end-color: rgb(48, 54, 61);
    border-block-end-style: solid;
    border-block-end-width: 1px;
    border-block-start-color: rgb(48, 54, 61);
    border-block-start-style: solid;
    border-block-start-width: 1px;
    border-end-end-radius: 23.8px;
    border-end-start-radius: 23.8px;
    border-inline-end-color: rgb(48, 54, 61);
    border-inline-end-style: solid;
    border-inline-end-width: 1px;
    border-inline-start-color: rgb(48, 54, 61);
    border-inline-start-style: solid;
    border-inline-start-width: 1px;
    border-start-end-radius: 23.8px;
    border-start-start-radius: 23.8px;
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    margin-block-start: 4px;
    overflow-wrap: break-word;
    padding-block-end: 1.428px;
    padding-block-start: 1.428px;
    padding-inline-end: 5.95px;
    padding-inline-start: 5.95px;
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    white-space: nowrap;
    border: 1px solid rgb(48, 54, 61);
    border-radius: 23.8px;
    font: 500 11.9px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    margin: 4px 0px 0px;
    outline: rgb(139, 148, 158) none 0px;
    padding: 1.428px 5.95px;
}/*#SPAN_10*/

#SPAN_10:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 11.9px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_10:after*/

#SPAN_10:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 11.9px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_10:before*/

#DIV_11 {
    block-size: 21px;
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    box-sizing: border-box;
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    height: 21px;
    inline-size: 24px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    overflow-wrap: break-word;
    perspective-origin: 12px 10.5px;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    transform-origin: 12px 10.5px;
    width: 24px;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_11*/

#DIV_11:after {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_11:after*/

#DIV_11:before {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#DIV_11:before*/

#INPUT_12 {
    appearance: none;
    background-position: right 8px 50%;
    border-block-end-color: rgb(48, 54, 61);
    border-block-end-style: solid;
    border-block-end-width: 1px;
    border-block-start-color: rgb(48, 54, 61);
    border-block-start-style: solid;
    border-block-start-width: 1px;
    border-end-end-radius: 6px;
    border-end-start-radius: 6px;
    border-inline-end-color: rgb(48, 54, 61);
    border-inline-end-style: solid;
    border-inline-end-width: 1px;
    border-inline-start-color: rgb(48, 54, 61);
    border-inline-start-style: solid;
    border-inline-start-width: 1px;
    border-start-end-radius: 6px;
    border-start-start-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    cursor: default;
    display: none;
    overflow-wrap: break-word;
    padding-block-end: 5px;
    padding-block-start: 5px;
    padding-inline-end: 12px;
    padding-inline-start: 12px;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    vertical-align: middle;
    background: rgb(13, 17, 23) none no-repeat scroll right 8px 50% / auto padding-box border-box;
    border: 1px solid rgb(48, 54, 61);
    border-radius: 6px;
    font: 14px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
    padding: 5px 12px;
    transition: color 0.08s cubic-bezier(0.33, 1, 0.68, 1) 0s, background-color 0.08s cubic-bezier(0.33, 1, 0.68, 1) 0s, box-shadow 0.08s cubic-bezier(0.33, 1, 0.68, 1) 0s, border-color 0.08s cubic-bezier(0.33, 1, 0.68, 1) 0s;
}/*#INPUT_12*/

#INPUT_12:after {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    cursor: default;
    overflow-wrap: break-word;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#INPUT_12:after*/

#INPUT_12:before {
    border-block-end-color: rgb(201, 209, 217);
    border-block-start-color: rgb(201, 209, 217);
    border-inline-end-color: rgb(201, 209, 217);
    border-inline-start-color: rgb(201, 209, 217);
    caret-color: rgb(201, 209, 217);
    color: rgb(201, 209, 217);
    column-rule-color: rgb(201, 209, 217);
    cursor: default;
    overflow-wrap: break-word;
    text-decoration: none solid rgb(201, 209, 217);
    text-emphasis-color: rgb(201, 209, 217);
    text-size-adjust: 100%;
    border: 0px none rgb(201, 209, 217);
    font: 14px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(201, 209, 217) none 0px;
}/*#INPUT_12:before*/

#SPAN_13 {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    padding-inline-start: 8px;
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
    padding: 0px 0px 0px 8px;
}/*#SPAN_13*/

#SPAN_13:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_13:after*/

#SPAN_13:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_13:before*/

#svg_14 {
    block-size: 16px;
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    display: inline-block;
    fill: rgb(139, 148, 158);
    height: 16px;
    inline-size: 16px;
    overflow-wrap: break-word;
    perspective-origin: 8px 8px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 8px 8px;
    vertical-align: text-bottom;
    width: 16px;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_14*/

#svg_14:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    fill: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_14:after*/

#svg_14:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    fill: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_14:before*/

#path_15 {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    d: path("M 10 13 A 1 1 0 1 0 10 11 A 1 1 0 0 0 10 13 Z M 6 13 A 1 1 0 1 0 6 11 A 1 1 0 0 0 6 13 Z M 7 8 A 1 1 0 1 1 5 8 A 1 1 0 0 1 7 8 Z M 10 9 A 1 1 0 1 0 10 7 A 1 1 0 0 0 10 9 Z M 11 4 A 1 1 0 1 1 9 4 A 1 1 0 0 1 11 4 Z M 6 5 A 1 1 0 1 0 6 3 A 1 1 0 0 0 6 5 Z");
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_15*/

#path_15:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_15:after*/

#path_15:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 14px / 21px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_15:before*/

#BUTTON_16, #BUTTON_19 {
    appearance: button;
    block-size: 1px;
    border-block-end-color: rgba(240, 246, 252, 0.1);
    border-block-end-style: solid;
    border-block-end-width: 1px;
    border-block-start-color: rgba(240, 246, 252, 0.1);
    border-block-start-style: solid;
    border-block-start-width: 1px;
    border-end-end-radius: 6px;
    border-end-start-radius: 6px;
    border-inline-end-color: rgba(240, 246, 252, 0.1);
    border-inline-end-style: solid;
    border-inline-end-width: 1px;
    border-inline-start-color: rgba(240, 246, 252, 0.1);
    border-inline-start-style: solid;
    border-inline-start-width: 1px;
    border-start-end-radius: 6px;
    border-start-start-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
    caret-color: rgb(88, 166, 255);
    clip: rect(1px, 1px, 1px, 1px);
    color: rgb(88, 166, 255);
    column-rule-color: rgb(88, 166, 255);
    cursor: pointer;
    display: none;
    height: 1px;
    inline-size: 1px;
    inset-inline-end: 0px;
    overflow-wrap: break-word;
    padding-block-end: 3px;
    padding-block-start: 3px;
    padding-inline-end: 12px;
    padding-inline-start: 12px;
    position: absolute;
    right: 0px;
    text-decoration: none solid rgb(88, 166, 255);
    text-emphasis-color: rgb(88, 166, 255);
    text-size-adjust: 100%;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 1px;
    background: rgb(33, 38, 45) none repeat scroll 0% 0% / auto padding-box border-box;
    border: 1px solid rgba(240, 246, 252, 0.1);
    border-radius: 6px;
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(88, 166, 255) none 0px;
    overflow: hidden;
    padding: 3px 12px;
    transition: color 0.08s cubic-bezier(0.33, 1, 0.68, 1) 0s, background-color 0.08s cubic-bezier(0.33, 1, 0.68, 1) 0s, box-shadow 0.08s cubic-bezier(0.33, 1, 0.68, 1) 0s, border-color 0.08s cubic-bezier(0.33, 1, 0.68, 1) 0s;
}/*#BUTTON_16, #BUTTON_19*/

#BUTTON_16:after, #BUTTON_19:after {
    border-block-end-color: rgb(88, 166, 255);
    border-block-start-color: rgb(88, 166, 255);
    border-inline-end-color: rgb(88, 166, 255);
    border-inline-start-color: rgb(88, 166, 255);
    caret-color: rgb(88, 166, 255);
    color: rgb(88, 166, 255);
    column-rule-color: rgb(88, 166, 255);
    cursor: pointer;
    overflow-wrap: break-word;
    text-decoration: none solid rgb(88, 166, 255);
    text-emphasis-color: rgb(88, 166, 255);
    text-size-adjust: 100%;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(88, 166, 255);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(88, 166, 255) none 0px;
}/*#BUTTON_16:after, #BUTTON_19:after*/

#BUTTON_16:before, #BUTTON_19:before {
    border-block-end-color: rgb(88, 166, 255);
    border-block-start-color: rgb(88, 166, 255);
    border-inline-end-color: rgb(88, 166, 255);
    border-inline-start-color: rgb(88, 166, 255);
    caret-color: rgb(88, 166, 255);
    color: rgb(88, 166, 255);
    column-rule-color: rgb(88, 166, 255);
    cursor: pointer;
    overflow-wrap: break-word;
    text-decoration: none solid rgb(88, 166, 255);
    text-emphasis-color: rgb(88, 166, 255);
    text-size-adjust: 100%;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(88, 166, 255);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(88, 166, 255) none 0px;
}/*#BUTTON_16:before, #BUTTON_19:before*/

#svg_17, #svg_20 {
    block-size: 16px;
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    display: inline-block;
    fill: rgb(139, 148, 158);
    height: 16px;
    inline-size: 16px;
    overflow-wrap: break-word;
    text-align: center;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    user-select: none;
    vertical-align: text-top;
    white-space: nowrap;
    width: 16px;
    border: 0px none rgb(139, 148, 158);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_17, #svg_20*/

#svg_17:after, #svg_20:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: center;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_17:after, #svg_20:after*/

#svg_17:before, #svg_20:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: center;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_17:before, #svg_20:before*/

#path_18 {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    d: path("M 3.22 9.78 A 0.75 0.75 0 0 1 3.22 8.72 L 7.47 4.47 A 0.75 0.75 0 0 1 8.53 4.47 L 12.78 8.72 A 0.75 0.75 0 0 1 11.72 9.78 L 8 6.06 L 4.28 9.78 A 0.75 0.75 0 0 1 3.22 9.78 Z");
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: center;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_18*/

#path_18:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: center;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_18:after*/

#path_18:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: center;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_18:before*/

#path_21 {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    d: path("M 12.78 6.22 A 0.75 0.75 0 0 1 12.78 7.28 L 8.53 11.53 A 0.75 0.75 0 0 1 7.47 11.53 L 3.22 7.28 A 0.75 0.75 0 0 1 4.28 6.22 L 8 9.94 L 11.72 6.22 A 0.75 0.75 0 0 1 12.78 6.22 Z");
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: center;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_21*/

#path_21:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: center;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_21:after*/

#path_21:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: center;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    user-select: none;
    white-space: nowrap;
    border: 0px none rgb(139, 148, 158);
    font: 500 12px / 20px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_21:before*/

#P_22 {
    block-size: 18px;
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    height: 18px;
    inline-size: 406px;
    margin-block-end: 0px;
    margin-block-start: 8px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    overflow-wrap: break-word;
    perspective-origin: 203px 9px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 203px 9px;
    width: 406px;
    border: 0px none rgb(139, 148, 158);
    flex: 1 0 auto;
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    margin: 8px 0px 0px;
    outline: rgb(139, 148, 158) none 0px;
}/*#P_22*/

#P_22:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#P_22:after*/

#P_22:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#P_22:before*/

#P_23 {
    block-size: 18px;
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    height: 18px;
    inline-size: 406px;
    margin-block-end: 0px;
    margin-block-start: 8px;
    min-block-size: auto;
    min-height: auto;
    min-inline-size: auto;
    min-width: auto;
    overflow-wrap: break-word;
    perspective-origin: 203px 9px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 203px 9px;
    width: 406px;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    margin: 8px 0px 0px;
    outline: rgb(139, 148, 158) none 0px;
}/*#P_23*/

#P_23:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#P_23:after*/

#P_23:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#P_23:before*/

#SPAN_24 {
    block-size: 18px;
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    display: inline-block;
    height: 18px;
    inline-size: 70.1875px;
    margin-inline-end: 16px;
    overflow-wrap: break-word;
    perspective-origin: 35.0938px 9px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 35.0938px 9px;
    width: 70.1875px;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    margin: 0px 16px 0px 0px;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_24*/

#SPAN_24:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_24:after*/

#SPAN_24:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_24:before*/

#SPAN_25 {
    block-size: 12px;
    border-block-end-color: rgba(255, 255, 255, 0.2);
    border-block-end-style: solid;
    border-block-end-width: 1px;
    border-block-start-color: rgba(255, 255, 255, 0.2);
    border-block-start-style: solid;
    border-block-start-width: 1px;
    border-end-end-radius: 50%;
    border-end-start-radius: 50%;
    border-inline-end-color: rgba(255, 255, 255, 0.2);
    border-inline-end-style: solid;
    border-inline-end-width: 1px;
    border-inline-start-color: rgba(255, 255, 255, 0.2);
    border-inline-start-style: solid;
    border-inline-start-width: 1px;
    border-start-end-radius: 50%;
    border-start-start-radius: 50%;
    bottom: -1px;
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    display: inline-block;
    height: 12px;
    inline-size: 12px;
    inset-block-end: -1px;
    inset-block-start: 1px;
    inset-inline-end: 0px;
    inset-inline-start: 0px;
    left: 0px;
    overflow-wrap: break-word;
    perspective-origin: 6px 6px;
    position: relative;
    right: 0px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    top: 1px;
    transform-origin: 6px 6px;
    width: 12px;
    background: ${
    languages[res.language as keyof typeof languages].color
  } none repeat scroll 0% 0% / auto padding-box border-box;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_25*/

#SPAN_25:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_25:after*/

#SPAN_25:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_25:before*/

#SPAN_26 {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_26*/

#SPAN_26:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_26:after*/

#SPAN_26:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#SPAN_26:before*/

#A_27 {
    block-size: 18px;
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    display: inline-block;
    height: 18px;
    inline-size: 25.7656px;
    overflow-wrap: break-word;
    perspective-origin: 12.875px 9px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 12.8828px 9px;
    width: 25.7656px;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#A_27*/

#A_27:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#A_27:after*/

#A_27:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#A_27:before*/

#svg_28 {
    block-size: 16px;
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    display: inline-block;
    fill: rgb(139, 148, 158);
    height: 16px;
    inline-size: 16px;
    overflow-wrap: break-word;
    perspective-origin: 8px 8px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 8px 8px;
    vertical-align: text-bottom;
    width: 16px;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_28*/

#svg_28:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_28:after*/

#svg_28:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#svg_28:before*/

#path_29 {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    box-sizing: border-box;
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    d: path("M 8 0.25 A 0.75 0.75 0 0 1 8.673 0.668 L 10.555 4.483 L 14.765 5.095 A 0.75 0.75 0 0 1 15.181 6.374 L 12.135 9.344 L 12.854 13.536 A 0.75 0.75 0 0 1 11.766 14.327 L 8 12.347 L 4.234 14.327 A 0.75 0.75 0 0 1 3.146 13.537 L 3.866 9.343 L 0.818 6.374 A 0.75 0.75 0 0 1 1.234 5.094 L 5.444 4.483 L 7.327 0.668 A 0.75 0.75 0 0 1 8 0.25 Z M 8 2.695 L 6.615 5.5 A 0.75 0.75 0 0 1 6.051 5.91 L 2.954 6.36 L 5.194 8.544 A 0.75 0.75 0 0 1 5.41 9.208 L 4.882 12.292 L 7.651 10.836 A 0.75 0.75 0 0 1 8.349 10.836 L 11.119 12.292 L 10.589 9.208 A 0.75 0.75 0 0 1 10.805 8.544 L 13.045 6.361 L 9.949 5.911 A 0.75 0.75 0 0 1 9.385 5.501 L 8 2.694 V 2.695 Z");
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    perspective-origin: 0px 0px;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    transform-origin: 0px 0px;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_29*/

#path_29:after {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_29:after*/

#path_29:before {
    border-block-end-color: rgb(139, 148, 158);
    border-block-start-color: rgb(139, 148, 158);
    border-inline-end-color: rgb(139, 148, 158);
    border-inline-start-color: rgb(139, 148, 158);
    caret-color: rgb(139, 148, 158);
    color: rgb(139, 148, 158);
    column-rule-color: rgb(139, 148, 158);
    cursor: pointer;
    fill: rgb(139, 148, 158);
    fill-rule: evenodd;
    overflow-wrap: break-word;
    text-align: left;
    text-decoration: none solid rgb(139, 148, 158);
    text-emphasis-color: rgb(139, 148, 158);
    text-size-adjust: 100%;
    border: 0px none rgb(139, 148, 158);
    font: 12px / 18px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    list-style: outside none none;
    outline: rgb(139, 148, 158) none 0px;
}/*#path_29:before*/
</style>`;
};
