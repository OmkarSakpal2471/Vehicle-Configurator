using System;
using System.Collections.Generic;

namespace Vehicle_Configurator.DbRepos;

public partial class AlternateComponentMaster
{
    public int AltId { get; set; }

    public int AltCompId { get; set; }

    public int CompId { get; set; }

    public double DeltaPrice { get; set; }

    public int MdlId { get; set; }
}
