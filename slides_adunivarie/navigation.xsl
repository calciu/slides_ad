<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:param name="section"/>
  <xsl:param name="slide"/>

  <xsl:template match="slides">

   <xsl:processing-instruction name="cocoon-process">type="xslt"</xsl:processing-instruction>
   <xsl:processing-instruction name="xml-stylesheet">href="<xsl:value-of select="@style"/>.xsl" type="text/xsl"</xsl:processing-instruction>

   <slide style="{@style}">

    <footer>
         <xsl:for-each select="authors/person">
          <xsl:value-of select="name"/>
          <xsl:text> </xsl:text>
         </xsl:for-each>
         <xsl:for-each select="event">
	    <xsl:text> - </xsl:text>
          <xsl:value-of select="name"/>
	    <xsl:text> - </xsl:text>
          <xsl:value-of select="location"/>
	    <xsl:text> - </xsl:text>
          <xsl:value-of select="date"/>
         </xsl:for-each>
    </footer>

       <view>
        <outline href="outline.xml"/>
        <frame-outline href="frame_outline.html"/>
        <slides href="slides.xml"/>
        <!--
        <structure-html href="structure-html"/>
        <web href="web"/>
        <structure-slides href="structure-slides"/>
        <pdf href="pdf"/>
         -->
       </view>



     <xsl:if test="not($section)">
       <title>
        <xsl:value-of select="title"/>
       </title>
       <navigation>
        <next href="?section=1"/>
       </navigation>
       <layout>
        <title><a href="?section=1"><xsl:value-of select="title"/></a></title>
        <subtitle>
         <xsl:for-each select="authors/person">
          <xsl:value-of select="name"/>
           <xsl:text>  </xsl:text>
          </xsl:for-each>
        </subtitle>
        <overview>
        <xsl:value-of select="overview"/>
        </overview>
       </layout>
     </xsl:if>

     <xsl:if test="$section">
      <xsl:if test="not($slide)">
       <xsl:apply-templates select="//section[position() = $section]"/>
      </xsl:if>
      <xsl:if test="$slide">
       <xsl:apply-templates select="//section[position() = $section]/slide[position() = $slide]"/>
      </xsl:if>
     </xsl:if>
   </slide>
  </xsl:template>

<!-- ================================ Section ============================== -->

  <xsl:template match="section">
    <title>
     <xsl:value-of select="title"/>
    </title>

    <navigation>
     <xsl:variable name="last">
      <xsl:value-of select="count(//section)"/>
     </xsl:variable>
     <xsl:variable name="previous-last">
      <xsl:value-of select="count(//section[position() = ($section - 1)]/slide)"/>
     </xsl:variable>

     <home href=""/>

     <xsl:if test="$section!=1">
      <previous-section href="?section={$section - 1}"/>
      <previous href="?section={$section - 1}&amp;slide={$previous-last}"/>
     </xsl:if>

     <xsl:if test="$section!=$last">
      <next-section href="?section={$section + 1}"/>
     </xsl:if>

     <next href="?section={$section}&amp;slide=1"/>
    </navigation>

   <layout>
     <title><xsl:value-of select="title"/></title>
     <xsl:if test="subtitle">
     <subtitle><xsl:value-of select="subtitle"/></subtitle>
     </xsl:if>
     <slide-titles>
     <xsl:for-each select="child::slide">
       <xsl:variable name="slide_pos">
        <xsl:value-of select="position()"/>
       </xsl:variable>
       <slide-title href="?section={$section}&amp;slide={$slide_pos}"><xsl:value-of select="title"/></slide-title>
     </xsl:for-each>
     </slide-titles>
    </layout>
  </xsl:template>

<!-- ================================ Slide ============================== -->

  <xsl:template match="slide">
    <title>
     <xsl:value-of select="title"/>
    </title>

    <navigation>
     <xsl:variable name="last-section">
      <xsl:value-of select="count(//section)"/>
     </xsl:variable>
     <xsl:variable name="last">
      <xsl:value-of select="count(//section[position() = $section]/slide)"/>
     </xsl:variable>
     <xsl:variable name="previous-last">
      <xsl:value-of select="count(//section[position() = ($section - 1)]/slide)"/>
     </xsl:variable>

     <home href="?section={$section}"/>

     <xsl:if test="$slide!=1">
      <previous href="?section={$section}&amp;slide={$slide - 1}"/>
     </xsl:if>
     <xsl:if test="($slide=1)">
      <previous href="?section={$section}"/>
     </xsl:if>

     <xsl:if test="$slide!=$last">
      <next href="?section={$section}&amp;slide={$slide + 1}"/>
     </xsl:if>
     <xsl:if test="($slide=$last) and ($section!=$last-section)">
      <next href="?section={$section + 1}"/>
     </xsl:if>

     <xsl:if test="$section!=1">
      <previous-section href="?section={$section - 1}"/>
     </xsl:if>
     <xsl:if test="$section!=$last-section">
      <next-section href="?section={$section + 1}"/>
     </xsl:if>
    </navigation>

    <layout>
     <xsl:apply-templates/>
    </layout>
  </xsl:template>
  
  <xsl:template match="*|@*|text()">
   <xsl:copy>
    <xsl:apply-templates select="*|@*|text()"/>
   </xsl:copy>
  </xsl:template>  

</xsl:stylesheet>
