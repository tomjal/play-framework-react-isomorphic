package services

import java.io.InputStreamReader
import javax.script.{ScriptEngineManager, ScriptException}

import play.api.Logger
import play.api.libs.json.JsArray

/**
  * Created by vwittal on 14/07/16.
  */
object ReactJs {

  lazy val engine = {
    val engineManager = new ScriptEngineManager(null).getEngineByName("nashorn")

    engineManager.eval("var global = this; var console = {error: print, log: print, warn: print};")
    engineManager.eval(new InputStreamReader(getClass.getResourceAsStream("/public/javascripts/app-frontend-server.js"))) // Inject javascript build

    engineManager
  }

  def render(jsArray: JsArray): String = {
    // execute the React app and get the corresponding html string
    val loadingScript = s"app.renderPostList($jsArray);"

    try {
      engine.eval(loadingScript).toString
    } catch  {
      case e: ScriptException =>
        Logger.error(e.toString)
        ""
    }

  }


}
