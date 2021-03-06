﻿/*****************************************************************************************************
* Gaia Framework for Adobe Flash ©2007-2008
* Written by: Steven Sacks
* email: stevensacks@gmail.com
* blog: http://www.stevensacks.net/
* forum: http://www.gaiaflashframework.com/forum/
* wiki: http://www.gaiaflashframework.com/wiki/
* 
* By using the Gaia Framework, you agree to keep the above contact information in the source code.
* 
* Gaia Framework for Adobe Flash is (c) 2007-2008 Steven Sacks and is released under the MIT License:
* http://www.opensource.org/licenses/mit-license.php 
*****************************************************************************************************/

package com.gaiaframework.assets
{
	import com.gaiaframework.api.IStyleSheet;
	import flash.text.StyleSheet;
	import flash.text.TextFormat;
	import flash.events.Event;
	
	public class StyleSheetAsset extends TextAsset implements IStyleSheet
	{
		private var _style:StyleSheet;
				
		function StyleSheetAsset() 
		{
			_style = new StyleSheet();
			super();
		}		
		public function get style():StyleSheet 
		{
			return _style;
		}		
		override protected function onComplete(event:Event):void
		{
			super.onComplete(event);
			_style.parseCSS(_data);
		}
		// HELPER METHOD
		public function transformStyle(styleName:String):TextFormat
		{
			return _style.transform(_style.getStyle(styleName));
		}
		// PROXY METHODS
		public function clear():void
		{
			_style.clear();
		}
		public function getStyle(styleName:String):Object
		{
			return _style.getStyle(styleName);
		}
		public function setStyle(styleName:String, styleObject:Object):void
		{
			_style.setStyle(styleName, styleObject);
		}
		public function transform(formatObject:Object):TextFormat
		{
			return _style.transform(formatObject);
		}
		override public function toString():String
		{
			return "[StyleSheetAsset] " + _id + " : " + _order + " ";
		}
	}
}